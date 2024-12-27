<script>
    export let goCode = `
  package main
  
  import "fmt"
  
  // Recursive function to generate Fibonacci numbers
  func fibonacciRecursive(n int) int {
      if n <= 1 {
          return n
      }
      return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
  }
  
  // Iterative function to generate Fibonacci numbers
  func fibonacciIterative(n int) int {
      a, b := 0, 1
      for i := 0; i < n; i++ {
          a, b = b, a+b
      }
      return a
  }
  
  func main() {
      n := 10 // Change this to generate more numbers in the sequence
  
      // Generate Fibonacci using the recursive method
      fmt.Println("Fibonacci Series (Recursive):")
      for i := 0; i < n; i++ {
          fmt.Printf("%d ", fibonacciRecursive(i))
      }
      fmt.Println()
  
      // Generate Fibonacci using the iterative method
      fmt.Println("Fibonacci Series (Iterative):")
      for i := 0; i < n; i++ {
          fmt.Printf("%d ", fibonacciIterative(i))
      }
  }
  `;
  
    let output = ''; // Initialize the output variable
  
    const runGoCode = async () => {
    try {
      const response = await fetch('https://go-lang-lessons.vercel.app/api/run-go', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: goCode }),
      });
  
            const result = await response.json();
            output = result.output || result.error || 'Error running code';
        } catch (error) {
            output = 'Failed to connect to the server.';
        }
    };
  </script>
  
  <section>
      <h2>Lesson 5: Fibonacci Series in GoLang</h2>
      <p>In this lesson, we will learn how to generate the Fibonacci series in Go, using both recursive and iterative methods.</p>
    
      <h3>Code Example:</h3>
      <pre><code>{goCode}</code></pre>
    
      <h4>Explanation:</h4>
      <ul>
        <li><strong>Fibonacci Sequence:</strong> The sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.</li>
        <li><strong>Recursive Approach:</strong> The recursive function calls itself until it reaches the base cases (0 or 1) to stop the recursion.</li>
        <li><strong>Iterative Approach:</strong> The iterative function calculates Fibonacci numbers using a loop, avoiding the overhead of recursive calls.</li>
        <li><strong>Efficiency:</strong> The iterative approach is generally more efficient than the recursive approach, especially for larger values of `n`.</li>
      </ul>
    
      <button on:click={runGoCode}>Run Code</button>
    
      <h4>Output:</h4>
      <pre>{output}</pre>
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