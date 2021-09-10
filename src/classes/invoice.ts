// classes
export class Invoice {
  // client: string
  // details: string
  // amount: number

  // constructor(c: string, d: string, a: number) {
  //   this.client = c
  //   this.details = d
  //   this.amount = a
  // }

  // short hand for above code only when using access modifiers
  // in front of the different properties
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`
  }
}