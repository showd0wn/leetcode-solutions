#!/usr/bin/env python3
import requests
import re
import os


class Readme:
    __target = 'https://github.com/showd0wn/leetcode/tree/master/'
    __url = 'https://leetcode-cn.com/api/problems/algorithms/'
    __dir = './algorithms/'
    __readme_path = './README.md'
    __level_map = {1: 'Easy', 2: 'Medium', 3: 'Hard'}

    def __init__(self):
        self.stats = {
            'Easy': {'total': 0, 'accept': 0},
            'Medium': {'total': 0, 'accept': 0},
            'Hard': {'total': 0, 'accept': 0},
        }
        self.solutions = {}
        self.problems = []

    def __get_localfiles(self):
        for root, _, files in os.walk(self.__dir):
            if not len(files):
                continue
            num = re.search(r'\d{4}', root).group()
            solutions = self.solutions[num] = {}
            for file in files:
                file_type = file.split('.')[1]
                file_path = os.path.join(root, file).replace('\\', '/').replace(' ', '%20')
                solutions[file_type] = file_path

    def __get_algorithms(self):
        response = requests.get(self.__url).json()

        algorithms = response['stat_status_pairs']

        for algo in algorithms[::-1]:
            num = algo['stat']['frontend_question_id'].zfill(4)
            level = algo['difficulty']['level']
            level_desc = self.__level_map[level]

            self.problems.append({
                'id': num,
                'level': level,
                'title': algo['stat']['question__title'],
                'lock': algo['paid_only'],
            })

            self.stats[level_desc]['total'] += 1

            if num in self.solutions and len(self.solutions[num]):
                self.stats[level_desc]['accept'] += 1

    def update(self):
        self.__get_localfiles()
        self.__get_algorithms()

        with open(self.__readme_path, 'w', encoding='utf-8') as f:
            f.write('# LeetCode\n'
                    '### 进度\n'
                    '> 统计规则： 算法题\n\n'
                    '|     |Easy|Medium|Hard|Total|\n'
                    '|:---:|:---:|:---:|:---:|:---:|\n'
                    '|**Accept**|{}|{}|{}|{}|\n'
                    '|**Total**|{}|{}|{}|{}|\n'
                    '### 题解\n'
                    '| ID | Title | Difficulty | &nbsp;&nbsp;Java&nbsp;&nbsp; | JavaScript | Python |\n'
                    '|:---:|:---:|:---:|:---:|:---:|:---:|\n'.format(
                        self.stats['Easy']['accept'],
                        self.stats['Medium']['accept'],
                        self.stats['Hard']['accept'],
                        self.stats['Easy']['accept'] + self.stats['Medium']['accept'] + self.stats['Hard']['accept'],
                        self.stats['Easy']['total'],
                        self.stats['Medium']['total'],
                        self.stats['Hard']['total'],
                        self.stats['Easy']['total'] + self.stats['Medium']['total'] + self.stats['Hard']['total'],
                    ))
            for problem in self.problems:
                data = {
                    'id': problem['id'],
                    'level': self.__level_map[problem['level']],
                    'title': self.generateTableTitle(problem['title'], problem['lock']),
                    'java': self.generateTableSolution('java', problem['id']),
                    'js': self.generateTableSolution('js', problem['id']),
                    'py': self.generateTableSolution('py', problem['id']),
                }
                f.write('|{id}|{title}|{level}|{java}|{js}|{py}|\n'.format(**data))

        print('\n------------------\n')
        print('README.md was created!')

    def generateTableTitle(self, title, lock):
        return '[{}](https://leetcode-cn.com/problems/{}/)'.format(
            title + ' :lock:' if lock else title,
            title.replace(' ', '-')
        )

    def generateTableSolution(self, type, id):
        if id not in self.solutions or type not in self.solutions[id]:
            return 'To Do'
        return '[{}]({})'.format({
            'java': 'Java',
            'js': 'JavaScript',
            'py': 'Python',
        }[type], os.path.join(self.__target, self.solutions[id][type]))


def main():
    readme = Readme()
    readme.update()


if __name__ == '__main__':
    main()
