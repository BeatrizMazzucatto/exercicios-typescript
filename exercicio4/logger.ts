export type LogLevel = "info" | "warn" | "error";

export class Logger<T> {
  constructor(private context: T) {}

  log(level: LogLevel, message: string): void {
    const time = new Date().toISOString();
    console.log(`[${time}] [${level.toUpperCase()}]`, this.context, "-", message);
  }

  info(message: string) {
    this.log("info", message);
  }

  warn(message: string) {
    this.log("warn", message);
  }

  error(message: string) {
    this.log("error", message);
  }
}