abstract class AClass {
	Numbers: number[]
	MAX_INTEGER: number = 10

	protected constructor(n: number) {
		this.fill(n)
	}

	private fill(n: number): void {
		this.Numbers = new Array(n).fill(0).map(item => Math.floor(Math.random() * this.MAX_INTEGER))
	}

	protected factorial(): number[] {
		const memo: number[] = []
		function factorial(n: number): number {
			if (n == 0 || n == 1) return 1
			if (memo[n] > 0) return memo[n]
			return memo[n] = factorial(n - 1) * n
		}
		return this.Numbers.map(factorial)
	}

	abstract sort(): number[]
}

class Class1 extends AClass {
	constructor(n: number) {
		super(n)
	}

	sort(): number[] {
		this.Numbers = this.Numbers.sort((a: number, b: number) => a - b)
		return this.factorial()
	}
}

const feature = new Class1(10)
console.log(feature.Numbers)
console.log(feature.sort())