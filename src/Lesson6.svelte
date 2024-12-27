<script>
    // Bubble Sort code in Go
    let goCode = `
  package main
  
  import "fmt"
  
  // Bubble Sort implementation
  func bubbleSort(arr []int) {
      n := len(arr)
      for i := 0; i < n-1; i++ {
          for j := 0; j < n-i-1; j++ {
              if arr[j] > arr[j+1] {
                  arr[j], arr[j+1] = arr[j+1], arr[j]
              }
          }
      }
  }
  
  // Selection Sort implementation
  func selectionSort(arr []int) {
      n := len(arr)
      for i := 0; i < n-1; i++ {
          minIndex := i
          for j := i + 1; j < n; j++ {
              if arr[j] < arr[minIndex] {
                  minIndex = j
              }
          }
          arr[i], arr[minIndex] = arr[minIndex], arr[i]
      }
  }
  
  // Merge Sort implementation
  func mergeSort(arr []int) []int {
      if len(arr) <= 1 {
          return arr
      }
  
      mid := len(arr) / 2
      left := mergeSort(arr[:mid])
      right := mergeSort(arr[mid:])
      return merge(left, right)
  }
  
  func merge(left, right []int) []int {
      result := []int{}
      i, j := 0, 0
      for i < len(left) && j < len(right) {
          if left[i] < right[j] {
              result = append(result, left[i])
              i++
          } else {
              result = append(result, right[j])
              j++
          }
      }
      result = append(result, left[i:]...)
      result = append(result, right[j:]...)
      return result
  }
  
  func main() {
      arr := []int{64, 34, 25, 12, 22, 11, 90}
      fmt.Println("Original array:", arr)
  
      // Bubble Sort
      bubbleSort(arr)
      fmt.Println("Bubble Sorted array:", arr)
  
      // Selection Sort
      selectionSort(arr)
      fmt.Println("Selection Sorted array:", arr)
  
      // Merge Sort
      sortedArr := mergeSort(arr)
      fmt.Println("Merge Sorted array:", sortedArr)
  }
    `;
  
    let output = '';
  
    const runGoCode = async () => {
    try {
      const response = await fetch('https://go-lang-lessons.vercel.app/api/runGo', {
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
    <h2>Lesson 6: Sorting Algorithms in GoLang</h2>
    <p>In this lesson, we will explore sorting algorithms, including <strong>Bubble Sort</strong>, <strong>Selection Sort</strong>, and <strong>Merge Sort</strong>, in Go.</p>
  
    <h3>Code Example:</h3>
    <pre><code>{goCode}</code></pre>
  
    <h4>Explanation:</h4>
    <ul>
      <li><strong>Bubble Sort:</strong> This is a simple comparison-based algorithm that repeatedly steps through the list, compares adjacent items, and swaps them if they are in the wrong order. The process repeats until no swaps are needed.</li>
      <li><strong>Selection Sort:</strong> In Selection Sort, the algorithm divides the list into two parts: the sorted part and the unsorted part. It selects the smallest element from the unsorted part and swaps it with the first element of the unsorted part, and then repeats the process.</li>
      <li><strong>Merge Sort:</strong> Merge Sort is a divide-and-conquer algorithm. It splits the array into halves, sorts each half, and then merges the sorted halves. This algorithm is more efficient than Bubble and Selection Sort with a time complexity of O(n log n).</li>
      <li><strong>Efficiency:</strong> Bubble Sort and Selection Sort have a time complexity of O(n²), making them inefficient for large datasets. Merge Sort, however, has a time complexity of O(n log n) and is more efficient for large arrays.</li>
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