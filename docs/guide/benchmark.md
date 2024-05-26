# benchmark

To run benchmarks for your `SessionForge` library using [PHPBench](https://github.com/phpbench/phpbench), you can follow these steps:

1. **Clone the Git Repository**: Clone the repository of your `SessionForge` library to your local machine. You can do this using the `git clone` command:

```sh
git clone https://github.com/biswas-abhi/session-forge.git
```

2. **Navigate to the Library Directory**: Change your current directory to the root directory of your SessionForge library:

```sh
cd session-forge
```

3. **Install Composer Dependencies**: Ensure that you have Composer installed on your system. Then, install the necessary dependencies for running benchmarks:

```sh
composer install --dev
```

4. **Run Benchmarks**: Once the dependencies are installed, you can use [PHPBench](https://github.com/phpbench/phpbench) to run benchmarks for your library. Use the following command:

```sh
composer benchmark
```

#### This command executes benchmarks defined in your library and generates a report with default formatting.

5. **Analyze Results**: After running the benchmarks, analyze the generated report to evaluate the performance of your `SessionForge` library under different scenarios and workloads.

---

By following these steps, you can effectively run benchmarks for `SessionForge` library using [PHPBench](https://github.com/phpbench/phpbench) and assess its performance characteristics. Adjustments can be made to the benchmarking setup based on specific requirements or additional performance metrics you want to measure.
