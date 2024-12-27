<script>
    let output = [];
  
    const sayHello = () => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          output = [...output, "Hello from Goroutine!"]; // Update the state properly
        }, i * 1000); // Simulate a delay for each message
      }
    };
  
    const mainHello = () => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          output = [...output, "Hello from Main!"]; // Update the state properly
        }, i * 1000); // Simulate a delay for each message
      }
    };
  
    const runCode = () => {
      output = []; // Reset the output before running the code again
      sayHello();
      mainHello();
    };
</script>
  
<section>
    <h2>Lesson 7: Go Concurrency and Goroutines</h2>
    <p>This lesson demonstrates Go Goroutines and concurrent execution, which allows multiple tasks to be executed simultaneously. Goroutines are lightweight threads that help improve the performance of your program by running tasks concurrently.</p>
  
    <h3>Code Example:</h3>
    <pre><code>{`
    package main
    
    import "fmt"
    import "time"
    
    func sayHello() {
        for i := 0; i < 5; i++ {
            fmt.Println("Hello from Goroutine!")
            // Simulate a delay
            time.Sleep(1 * time.Second)
        }
    }
    
    func main() {
        go sayHello() // Start Goroutine
        for i := 0; i < 5; i++ {
            fmt.Println("Hello from Main!")
            // Simulate a delay
            time.Sleep(1 * time.Second)
        }
    }
    `}</code></pre>
  
    <h4>Explanation:</h4>
    <p>In this example, the `sayHello` function is executed as a Goroutine, allowing it to run concurrently with the `main` function. Both functions print messages, but the Goroutine executes in parallel, which may lead to interleaved outputs. The `time.Sleep` function simulates a delay between messages for better visualization of concurrent execution.</p>
  
    <button on:click={runCode}>Run Code</button>
  
    <h3>Output:</h3>
    <pre>{output.join("\n")}</pre>
</section>
  
<style>
    section {
      margin-top: 20px;
      padding: 20px;
      background-color: #2a2a2a; /* Darker background */
      color: #ddd; /* Light text */
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }
  
    h2, h3, h4 {
      color: #fff;  /* White color for headings */
    }
  
    button {
      background-color: #007bff;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 10px;
      font-size: 1em;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  
    pre {
      background-color: #333;  /* Dark background for code blocks */
      padding: 15px;
      border-radius: 5px;
      color: #f1f1f1; /* Light text for code */
      overflow-x: auto;
    }
  
    code {
      color: #ff416c; /* Highlighted code color */
    }
</style>
