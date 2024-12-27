<script>
    let goCode = `
    package main
  
    import "fmt"
  
    func main() {
        // Declare variables with types
        var name string = "GoLang"
        var version float32 = 1.18
  
        // Use shorthand declaration
        releaseYear := 2009
  
        // Print the details
        fmt.Printf("Welcome to %s, version %.2f, released in %d!\\n", name, version, releaseYear)
    }
    `;
  
    let output = '';
  
    const runGoCode = async () => {
      try {
        const response = await fetch('http://localhost:3001/run-go', {
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
    <h2>Lesson 2: Variables and Data Types</h2>
    <p>This lesson introduces variables and data types in GoLang, including declaring variables with explicit types and using shorthand syntax.</p>
  
    <h3>Code Example:</h3>
    <pre><code>{goCode}</code></pre>
  
    <h4>Explanation:</h4>
    <ul>
      <li><code>var name string = "GoLang"</code>: Declares a variable <code>name</code> of type <code>string</code>.</li>
      <li><code>var version float32 = 1.18</code>: Declares a variable <code>version</code> of type <code>float32</code>.</li>
      <li><code>releaseYear := 2009</code>: Uses shorthand syntax to declare and initialize <code>releaseYear</code>.</li>
      <li><code>fmt.Printf</code>: Formats and prints the output.</li>
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