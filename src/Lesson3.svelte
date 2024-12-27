<script>
  let goCode = `
package main

import "fmt"

// Define a struct
type Person struct {
  Name string
  Age  int
}

func main() {
  // Create a map with key-value pairs (Name -> Age)
  ages := map[string]int{
      "Alice": 25,
      "Bob":   30,
      "John":  35,
  }

  // Print the map
  fmt.Println("Ages Map:", ages)

  // Iterate over the map
  for name, age := range ages {
      fmt.Printf("%s is %d years old.\\n", name, age)
  }

  // Create a Person struct
  person := Person{Name: "Jane", Age: 28}
  fmt.Printf("Person: %s, Age: %d\\n", person.Name, person.Age)
}
`;

  let output = '';

  const runGoCode = async () => {
  try {
    const response = await fetch('/api/run-go', {  // Use relative URL for Vercel
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
  <h2>Lesson 4: Maps and Structs in GoLang</h2>
  <p>Learn how to use Maps and Structs in Go to organize data effectively.</p>

  <h3>Code Example:</h3>
  <pre><code>{goCode}</code></pre>

  <h4>Explanation:</h4>
  <ul>
      <li><code>maps</code>: Key-value pairs used to store data where the key is a string (name) and the value is an integer (age).</li>
      <li><code>range</code>: Looping through the map to access both keys and values.</li>
      <li><code>structs</code>: Grouping different variables (name, age) into a custom data type to represent a "Person".</li>
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