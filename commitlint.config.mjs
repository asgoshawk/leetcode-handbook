import conventional from '@commitlint/config-conventional';

const headerOnly = (parsed) => [
  !parsed.body && !parsed.footer,
  'commit message must contain one English summary line only',
];
const asciiHeader = (parsed) => [
  /^[\x20-\x7E]+$/.test(parsed.header ?? ''),
  'commit message must use English ASCII characters only',
];

export default {
  extends: ['@commitlint/config-conventional'],
  plugins: [{ rules: { 'header-only': headerOnly, 'ascii-header': asciiHeader } }],
  rules: {
    ...conventional.rules,
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'refactor', 'test', 'build', 'ci', 'chore', 'style', 'perf', 'revert']],
    'header-max-length': [2, 'always', 100],
    'subject-full-stop': [2, 'never', '.'],
    'header-only': [2, 'always'],
    'ascii-header': [2, 'always'],
  },
};
