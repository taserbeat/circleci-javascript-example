# CircleProject
test for CI/CD on CircleCI

# Setup
```bash
yarn install
```

# Run Test
```bash
yarn test
```

Outputs:
```
yarn run v1.22.4
$ jest
 PASS  src/double.test.js
  ✓ double 2 to equal 4 (2 ms)
  ✓ double 10 to equal 20 (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.296 s
Ran all test suites.
✨  Done in 4.47s.
```

# CircleCI
## Local

```bash
circleci local execute
```

## Cloud

- First time  
    `Add project` -> `Set Up Project` -> `Use Existing Config` -> `Start Building`

- Second time or later  
    CI works when latest commits are pushed.