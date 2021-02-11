#!/usr/bin/env python3
import re
import os
import ssl
import json
from urllib import request

ssl._create_default_https_context = ssl._create_unverified_context  # type: ignore


class Update:
    _level_map = {1: 'Easy', 2: 'Medium', 3: 'Hard'}

    def __init__(self):
        self.solutions = {}
        self.stats = {
            'Easy': {'total': 0, 'accept': 0},
            'Medium': {'total': 0, 'accept': 0},
            'Hard': {'total': 0, 'accept': 0},
        }
        self.problems = []

        self._handle_localfiles()
        self._handle_algorithms()

    def _handle_localfiles(self) -> None:
        for root, _, files in os.walk('./algorithms/'):
            if not files:
                continue
            if id_search_obj := re.search(r'(?<=\[)\d+(?=\])', root):
                id = id_search_obj.group()
                solutions = self.solutions[id] = {}
                solutions['caption'] = os.path.split(root)[1].replace('[' + id + ']', '')
                path = solutions['path'] = {}
                topics = solutions['topics'] = []

                for file in files:
                    file_type = file.split('.')[1]
                    file_path = os.path.join(root, file)
                    path[file_type] = file_path.replace('\\', '/').replace(' ', '%20')
                    with open(file_path, 'r', encoding='utf-8') as f:
                        line = f.readline()
                        if topics_search_obj := re.search(r'(?<=topics).+', line):
                            keys = re.findall(r'\w+', topics_search_obj.group())
                            topics.extend(keys)

    def _handle_algorithms(self) -> None:
        response = self._fetch_data('https://leetcode-cn.com/api/problems/algorithms/')
        algorithms = response['stat_status_pairs']

        for algo in algorithms[::-1]:
            id = algo['stat']['frontend_question_id']
            level = algo['difficulty']['level']
            level_desc = self._level_map[level]

            self.stats[level_desc]['total'] += 1

            if id in self.solutions and self.solutions[id]:
                caption = self.solutions[id]['caption']
                all_topics = self.solutions[id]['topics']
                topics = list(set(all_topics))
                topics.sort(key=all_topics.index)

                self.stats[level_desc]['accept'] += 1
                self.problems.append(
                    {
                        'id': id,
                        'level': level,
                        'title': algo['stat']['question__title'],
                        'title_slug': algo['stat']['question__title_slug'],
                        'lock': algo['paid_only'],
                        'caption': caption,
                        'topics': topics,
                    }
                )

    def update_pages(self) -> None:
        with open('./docs/problems.json', 'w', encoding='utf-8') as f:
            f.write(json.dumps(self.problems, indent=4, ensure_ascii=False))

    def update_readme(self) -> None:
        stats_easy, stats_medium, stats_hard = self.stats.values()

        with open('./README.md', 'w', encoding='utf-8') as f:
            f.write(
                '# LeetCode\n'
                '### 进度\n'
                '> 统计规则： 算法题\n\n'
                '|     |Easy|Medium|Hard|Total|\n'
                '|:---:|:---:|:---:|:---:|:---:|\n'
                '|**Accept**|{}|{}|{}|{}|\n'
                '|**Total**|{}|{}|{}|{}|\n'
                '### 题解\n'
                '| &nbsp;&nbsp;&nbsp;&nbsp;ID&nbsp;&nbsp;&nbsp;&nbsp; | Title | Difficulty | Python | TypeScript |\n'
                '|:---:|:---:|:---:|:---:|:---:|\n'.format(
                    stats_easy['accept'],
                    stats_medium['accept'],
                    stats_hard['accept'],
                    stats_easy['accept'] + stats_medium['accept'] + stats_hard['accept'],
                    stats_easy['total'],
                    stats_medium['total'],
                    stats_hard['total'],
                    stats_easy['total'] + stats_medium['total'] + stats_hard['total'],
                )
            )
            for problem in self.problems:
                id, level, title, title_slug, lock, *_ = problem.values()
                f.write(
                    '|{id}|{title}|{level}|{py}|{ts}|\n'.format(
                        id=id,
                        level=self._level_map[level],
                        title=self._generate_Title(title, title_slug, lock),
                        py=self._generate_solution('py', id),
                        ts=self._generate_solution('ts', id),
                    )
                )

    def _generate_Title(self, title: str, title_slug: str, lock: bool) -> str:
        return '[{}](https://leetcode-cn.com/problems/{}/)'.format(
            title + ' :lock:' if lock else title,
            title_slug,
        )

    def _generate_solution(self, type: str, id: str) -> str:
        return '[{}]({})'.format(
            {
                'ts': 'TypeScript',
                'py': 'Python',
            }[type],
            os.path.join(
                'https://github.com/showd0wn/leetcode/tree/master/',
                self.solutions[id]['path'][type],
            ),
        )

    def _fetch_data(self, url: str):
        req = request.Request(url)
        with request.urlopen(req) as f:
            return json.loads(f.read().decode('utf-8'))


def main():
    update = Update()
    update.update_pages()
    update.update_readme()


if __name__ == '__main__':
    main()
