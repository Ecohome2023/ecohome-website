@AGENTS.md

## Working on this site
Two people change this site, each through their own Claude sessions, and both push to main.
- Run `git pull` before every change, and again right before pushing.
- Never force-push, and never overwrite or revert someone else's change. If a pull brings in edits
  to the same lines you changed, stop and ask the person you're working for.
- Change only what was asked: no refactoring, reformatting or dependency/config changes unless
  asked.
- Run `npm run build` and `npm run lint` before pushing.
- Short commit messages that say what changed and where.
