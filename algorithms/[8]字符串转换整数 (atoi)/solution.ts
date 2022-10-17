// topics = ["字符串", "状态机"]

// 解法一 parseInt
function myAtoi(s: string): number {
  const num = parseInt(s, 10);

  if (isNaN(num)) {
    return 0;
  }

  if (num < Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  }

  if (num > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }

  return num;
}

export enum State {
  Start = "START",
  Signed = "SIGNED",
  In_number = "IN_NUMBER",
  End = "END",
}

export enum Stage {
  Space,
  Sign,
  Number,
  Other,
}

export enum Sign {
  Positive = 1,
  Negative = -1,
}

// 解法二 自动机（有限状态自动机 FSM）
class Automaton {
  state: State;
  sign: Sign;
  answer: number;
  map: Map<State, State[]>;

  constructor() {
    // 执行阶段，默认处于开始执行阶段
    this.state = State.Start;
    // 正负符号，默认是正数
    this.sign = Sign.Positive;
    // 数值，默认是 0
    this.answer = 0;
    // 自动机状态对应表：[执行阶段, [空格, 正负, 数值, 其他]]
    this.map = new Map([
      [State.Start, [State.Start, State.Signed, State.In_number, State.End]],
      [State.Signed, [State.End, State.End, State.In_number, State.End]],
      [State.In_number, [State.End, State.End, State.In_number, State.End]],
      [State.End, [State.End, State.End, State.End, State.End]],
    ]);
  }

  // 获取状态对应索引
  getIndex(char: string): Stage {
    // 空格判断
    if (char === " ") {
      return Stage.Space;
    }
    // 正负判断
    if (char === "-" || char === "+") {
      return Stage.Sign;
    }
    // 空格判断
    if (!isNaN(parseInt(char))) {
      return Stage.Number;
    }
    // 其他情况
    return Stage.Other;
  }

  // 字符转换执行函数
  get(char: string) {
    this.state = this.map.get(this.state)![this.getIndex(char)];
    switch (this.state) {
      case State.Signed:
        this.sign = char === "+" ? Sign.Positive : Sign.Negative;
        break;
      case State.In_number:
        this.answer = this.answer * 10 + Number(char);
        this.answer =
          this.sign === Sign.Positive
            ? Math.min(this.answer, Math.pow(2, 31) - 1)
            : Math.min(this.answer, -Math.pow(-2, 31));
        break;
      default:
        break;
    }
  }
}

function myAtoi2(s: string): number {
  const automaton = new Automaton();

  for (const char of s) {
    automaton.get(char);
  }

  return automaton.sign * automaton.answer;
}
