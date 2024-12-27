<script>
    import { writable } from "svelte/store";
  
    let result = writable("");
    let error = writable("");
  
    const divide = (a, b) => {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    };
  
    const riskyFunction = () => {
      throw new Error("Something went terribly wrong!");
    };
  
    const runCode = () => {
      // Error Handling with Divide
      try {
        result.set(divide(10, 2));
        error.set("");
      } catch (e) {
        error.set(e.message);
      }
  
      // Simulate a panic
      try {
        riskyFunction();
      } catch (e) {
        error.set(e.message);
      }
    };
</script>
  
<section>
    <h2>Lesson 8: Error Handling in Go</h2>
    <p>This lesson demonstrates how error handling works in Go using a combination of try-catch (which is not natively supported in Go but is simulated here) and Go's panic-recover mechanism. In Go, errors are typically handled using explicit error checking, but for this lesson, we simulate error handling in a similar way to many other programming languages.</p>
  
    <h3>Code Example:</h3>
    <pre><code>{`
    package main
    
    import "fmt"
    import "errors"
    
    func divide(a, b int) (int, error) {
        if b == 0 {
            return 0, errors.New("Cannot divide by zero")
        }
        return a / b, nil
    }
    
    func riskyFunction() {
        panic("Something went terribly wrong!")
    }
    
    func main() {
        // Simulate error handling with divide
        result, err := divide(10, 2)
        if err != nil {
            fmt.Println("Error:", err)
        } else {
            fmt.Println("Result:", result)
        }
        
        // Simulate a panic
        defer func() {
            if r := recover(); r != nil {
                fmt.Println("Recovered from panic:", r)
            }
        }()
        
        riskyFunction()
    }
    `}</code></pre>
  
    <h4>Explanation:</h4>
    <p>The Go example above demonstrates two error-handling techniques:</p>
    <ul>
      <li><strong>Error Handling (Divide function):</strong> Go's standard way of returning an error is by using a second return value from functions (in this case, the `divide` function returns an error if division by zero occurs). This is handled explicitly by checking if the error is `nil`.</li>
      <li><strong>Panic and Recover:</strong> Go also provides a mechanism for "panic" and "recover". If a function encounters a severe error, like `riskyFunction()`, it calls `panic()`. You can then use `recover()` to handle the panic and prevent the program from crashing.</li>
    </ul>
  
    <button on:click={runCode}>Run Code</button>
  
    <h3>Result:</h3>
    <pre>{`Result: ${$result}`}</pre>
    
    {#if $error}
      <h3>Error:</h3>
      <pre>{`Error: ${$error}`}</pre>
    {/if}
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
