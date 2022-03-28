#!/usr/bin/env python3
import re
import os
import ssl
import json
import subprocess
from urllib import request

ssl._create_default_https_context = ssl._create_unverified_context  # type: ignore


class Update:
    _level_map = {1: 'Easy', 2: 'Medium', 3: 'Hard'}
    _type_map = {
        'py': 'Python',
        'ts': 'TypeScript',
        'cs': 'C#',
    }

    def __init__(self):
        cmd = 'git rev-parse --abbrev-ref HEAD'
        self.branch = subprocess.check_output(cmd.split()).strip().decode('utf-8')

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
                caption = os.path.split(root)[1]
                solutions = self.solutions[id] = {}
                solutions['caption'] = caption.replace('[' + id + ']', '')
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
            level_desc = Update._level_map[level]

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
        with open('./docs/data/problems.json', 'w', encoding='utf-8') as f:
            f.write(
                json.dumps(
                    {
                        'problems': self.problems,
                        'stats': self.stats,
                    },
                    indent=4,
                    ensure_ascii=False,
                )
            )

    def update_readme(self) -> None:
        stats_easy, stats_medium, stats_hard = self.stats.values()

        with open('./README.md', 'w', encoding='utf-8') as f:
            f.write(
                '# LeetCode\n\n'
                '### 进度\n'
                '> 统计规则： 算法题\n\n'
                '|     |Easy|Medium|Hard|Total|\n'
                '|:---:|:---:|:---:|:---:|:---:|\n'
                '|**Accept**|{}|{}|{}|{}|\n'
                '|**Total**|{}|{}|{}|{}|\n\n'
                '### 题解\n'
                '| ID | Title | Difficulty | Python | TypeScript | C# |\n'
                '|:---:|:---:|:---:|:---:|:---:|:---:|\n'.format(
                    stats_easy['accept'],
                    stats_medium['accept'],
                    stats_hard['accept'],
                    stats_easy['accept']
                    + stats_medium['accept']
                    + stats_hard['accept'],
                    stats_easy['total'],
                    stats_medium['total'],
                    stats_hard['total'],
                    stats_easy['total'] + stats_medium['total'] + stats_hard['total'],
                )
            )
            for problem in self.problems:
                id, level, title, title_slug, lock, *_ = problem.values()
                f.write(
                    '|{id}|{title}|{level}|{py}|{ts}|{cs}|\n'.format(
                        id=id,
                        level=Update._level_map[level],
                        title=self._generate_Title(title, title_slug, lock),
                        py=self._generate_solution('py', id),
                        ts=self._generate_solution('ts', id),
                        cs=self._generate_solution('cs', id),
                    )
                )

    def _generate_Title(self, title: str, title_slug: str, lock: bool) -> str:
        return f'[{title + ":lock" if lock else title}](https://leetcode-cn.com/problems/{title_slug}/)'

    def _generate_solution(self, type: str, id: str) -> str:
        if type not in self.solutions[id]['path']:
            return '--'
        path = os.path.join(
            f'https://github.com/showd0wn/leetcode/tree/{self.branch}/',
            self.solutions[id]['path'][type],
        )
        return f'[{Update._type_map[type]}]({path})'

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
