/**
 * Tipagem representativa de uma classe que possui construtor.
 */
export type Newable<T> = new (...args: any[]) => T
