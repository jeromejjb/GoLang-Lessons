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
  <h2>Lesson 4: Maps and Structs in GoLang</h2>
  <p>In this lesson, we will explore how to use <strong>Maps</strong> and <strong>Structs</strong> in Go to organize and manage data efficiently.</p>

  <h3>Code Example:</h3>
  <pre><code>{goCode}</code></pre>

  <h4>Explanation:</h4>
  <ul>
      <li><strong>Maps:</strong> Maps are unordered collections of key-value pairs. In Go, a map is a built-in data type that associates keys with values. In this example, we use a map to store ages with people's names as keys and their ages as values. A map is defined using the `map[keyType]valueType` syntax.</li>
      <li><strong>Iterating over a Map:</strong> We use the <code>range</code> keyword to loop over a map. It returns two values for each iteration: the key and the value. In the code, we print out the name and age of each person in the map.</li>
      <li><strong>Structs:</strong> A struct is a composite data type that groups variables (called fields) together under a single type. In this lesson, we define a struct called <code>Person</code> with two fields: <code>Name</code> (string) and <code>Age</code> (int). We then create an instance of the <code>Person</code> struct and print the person's details.</li>
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