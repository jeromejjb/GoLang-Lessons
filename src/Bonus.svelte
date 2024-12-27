<script>
  import { writable } from "svelte/store";

  let qubitState = writable("superposition");
  let measurementResult = writable(null);
  let error = writable("");
  let isMeasuring = writable(false);

  // Function to simulate a quantum measurement
  const measureQubit = () => {
    try {
      isMeasuring.set(true);
      const random = Math.random(); // Randomly decide outcome
      setTimeout(() => {
        if (random < 0.5) {
          measurementResult.set(0);
          qubitState.set("collapsed to 0");
        } else {
          measurementResult.set(1);
          qubitState.set("collapsed to 1");
        }
        isMeasuring.set(false);
      }, 1000);
    } catch (e) {
      error.set("An error occurred during the measurement process.");
    }
  };
  
  // Example of simulating a panic scenario
  const simulatePanic = () => {
    try {
      throw new Error("Quantum collapse failed!");
    } catch (e) {
      error.set(e.message);
    }
  };
  
  const runCode = () => {
    // Run measurement
    try {
      measureQubit();
      error.set("");
    } catch (e) {
      error.set(e.message);
    }

    // Simulate panic scenario
    try {
      simulatePanic();
    } catch (e) {
      error.set(e.message);
    }
  };
</script>

<section>
  <h2>Lesson: Superposition and Quantum Measurement Simulation</h2>
  <p>This lesson demonstrates how quantum measurement works, using a superposition of states and a probabilistic collapse when measured.</p>

  <h3>Explanation:</h3>
  <p><strong>Quantum Superposition and Measurement:</strong></p>
  <p>In quantum mechanics, <strong>superposition</strong> refers to the ability of a quantum system (like a qubit) to be in a combination of states at once. A qubit can be both <code>0</code> and <code>1</code> simultaneously until it is measured. The measurement process then <strong>collapses</strong> the qubit's superposition into one of the possible states.</p>
  <p>In this Svelte component:</p>
  <ul>
    <li><strong>Superposition:</strong> The qubit initially exists in the "superposition" state, meaning it is in both <code>0</code> and <code>1</code> states simultaneously.</li>
    <li><strong>Measurement:</strong> When the user clicks "Run Code," the <code>measureQubit()</code> function simulates the measurement process. A random value decides whether the qubit collapses to <code>0</code> or <code>1</code>, reflecting the probabilistic nature of quantum measurements.</li>
    <li><strong>Error Handling:</strong> The component also simulates a panic scenario with the <code>simulatePanic()</code> function, mimicking an error that occurs during the quantum measurement process.</li>
  </ul>

  <h3>Code Example:</h3>
  <pre><code>{`
    function measureQubit() {
      // Simulate a qubit in superposition
      const random = Math.random();
      if (random < 0.5) {
        return 'collapsed to 0';
      } else {
        return 'collapsed to 1';
      }
    }
    
    try {
      const result = measureQubit();
      console.log(result); // Output: 'collapsed to 0' or 'collapsed to 1'
    } catch (e) {
      console.error("Error during measurement: ", e);
    }
  `}</code></pre>

  <button on:click={runCode}>Run Code</button>

  <h3>Qubit State:</h3>
  <pre>{`Current state: ${$qubitState}`}</pre>

  {#if $measurementResult !== null}
    <h3>Measurement Result:</h3>
    <pre>{`Qubit collapsed to: ${$measurementResult}`}</pre>
  {/if}

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

  h2, h3 {
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
