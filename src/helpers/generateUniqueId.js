function generateUniqueId(prefix = "input") {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

export { generateUniqueId };
