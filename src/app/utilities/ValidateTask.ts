class ValidateTask {
  static instance: ValidateTask = new ValidateTask();

  private constructor() {}

  validateContent(content: string): string | undefined {
    const text = content.trim();
    if (!text) return;
    return text;
  }
}

export default ValidateTask.instance;
