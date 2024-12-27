<script>
	document.title = "GoLang Lessons";
	import Lesson1 from './Lesson1.svelte';
	import Lesson2 from './Lesson2.svelte';
	import Lesson3 from './Lesson3.svelte';
	import Lesson4 from './Lesson4.svelte'; 
	import Lesson5 from './Lesson5.svelte';
	import Lesson6 from './Lesson6.svelte';
	import Lesson7 from './Lesson7.svelte';
	import Lesson8 from './Lesson8.svelte';
	import Bonus from './Bonus.svelte';
	
	let currentLesson = 'Lesson1';
	
	const lessons = {
	  Lesson1,
	  Lesson2,
	  Lesson3,
	  Lesson4, 
	  Lesson5,
	  Lesson6,
	  Lesson7,
	  Lesson8,
	  Bonus,
	};
  </script>
	
  <main>
	<header>
	  <h1>GoLang Lessons</h1>
	</header>
	
	<nav>
	  <ul class="nav-list">
		<li class={currentLesson === 'Lesson1' ? 'active' : ''}>
		  <button on:click={() => (currentLesson = 'Lesson1')} title="Introduction to GoLang">
			<span class="nav-icon">📚</span> Lesson 1
		  </button>
		</li>
		<li class={currentLesson === 'Lesson2' ? 'active' : ''}>
		  <button on:click={() => (currentLesson = 'Lesson2')} title="Variables and Data Types">
			<span class="nav-icon">🔢</span> Lesson 2
		  </button>
		</li>
		<li class={currentLesson === 'Lesson3' ? 'active' : ''}>
		  <button on:click={() => (currentLesson = 'Lesson3')} title="Control Flow">
			<span class="nav-icon">🔄</span> Lesson 3
		  </button>
		</li>
		<li class={currentLesson === 'Lesson4' ? 'active' : ''}>
		  <button on:click={() => (currentLesson = 'Lesson4')} title="Maps and Structs">
			<span class="nav-icon">📋</span> Lesson 4
		  </button>
		</li>
		<li class={currentLesson === 'Lesson5' ? 'active' : ''}>
		  <button on:click={() => (currentLesson = 'Lesson5')} title="Fibonacci Series">
			<span class="nav-icon">🔢</span> Lesson 5
		  </button>
		</li>
		<li class={currentLesson === 'Lesson6' ? 'active' : ''}>
		  <button on:click={() => (currentLesson = 'Lesson6')} title="Sorting Algorithms">
			<span class="nav-icon">⚙️</span> Lesson 6
		  </button>
		</li>
		<li class={currentLesson === 'Lesson7' ? 'active' : ''}>
		  <button on:click={() => (currentLesson = 'Lesson7')} title="Concurrency Basics">
			<span class="nav-icon">💻</span> Lesson 7
		  </button>
		</li>
		<li class={currentLesson === 'Lesson8' ? 'active' : ''}>
		  <button on:click={() => (currentLesson = 'Lesson8')} title="Error Handling">
			<span class="nav-icon">⚠️</span> Lesson 8
		  </button>
		</li>
		<li class={currentLesson === 'Bonus' ? 'active' : ''}>
			<button on:click={() => (currentLesson = 'Bonus')} title="Error Handling">
			  <span class="nav-icon">🚀</span> Bonus
			</button>
		  </li>
	  </ul>
	</nav>
	
	<section>
	  {#if currentLesson && lessons[currentLesson]}
		<svelte:component this={lessons[currentLesson]} />
	  {/if}
	</section>
	<!-- Footer -->
	<footer>
		<p class="footer-text">This is a <span class="highlight">Jerome J Brown Production</span></p>
	  </footer>
  </main>
	
  <style>
	main {
	  max-width: 900px;
	  margin: 20px auto;
	  padding: 20px;
	  color: white;
	}
	
	header {
	  text-align: center;
	  margin-bottom: 20px;
	  font-size: 2.5rem;
	  letter-spacing: 1.5px;
	  font-weight: bold;
	}
	
	nav {
	  margin: 20px 0;
	  position: relative;
	}
	
	.nav-list {
	  display: flex;
	  justify-content: space-between;
	  list-style-type: none;
	  padding: 0;
	  margin: 0;
	  position: relative;
	}
	
	.nav-list li {
	  position: relative;
	  flex: 1;
	  text-align: center;
	}
	
	button {
	  background-color: transparent;
	  color: #fff;
	  padding: 12px 30px;
	  border: 2px solid #444;
	  border-radius: 8px;
	  font-size: 1rem;
	  transition: all 0.3s ease;
	  cursor: pointer;
	  width: 100%;
	  display: block;
	  margin: 0;
	  text-transform: uppercase;
	  letter-spacing: 1px;
	}
	
	button:hover {
	  background-color: rgba(255, 255, 255, 0.1);
	  border: 2px solid #fff;
	  transform: scale(1.05);
	  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
	}
	
	.nav-icon {
	  margin-right: 12px;
	  font-size: 1.5rem;
	  transition: transform 0.3s ease;
	}
	
	button:hover .nav-icon {
	  transform: rotate(15deg);
	}
	
	.active button {
	  border-color: #00c9b7;
	  color: #00c9b7;
	  background-color: rgba(0, 201, 183, 0.1);
	}
	
	.active button:hover {
	  background-color: #00c9b7;
	  color: #121212;
	  border-color: #00c9b7;
	  transform: scale(1.1);
	}
	
	.active::after {
	  content: '';
	  position: absolute;
	  bottom: -8px;
	  left: 50%;
	  transform: translateX(-50%);
	  width: 60%;
	  height: 3px;
	  background: linear-gradient(to right, #00c9b7, #ff416c);
	  animation: slide 0.5s ease;
	}
	
	@keyframes slide {
	  0% {
		width: 0;
		transform: translateX(-50%);
	  }
	  100% {
		width: 60%;
		transform: translateX(-50%);
	  }
	}
	
	section {
	  padding: 20px;
	  border-radius: 8px;
	  margin-top: 20px;
	  color: #ddd;
	}
	
	h2, h3 {
	  color: #fff;
	}
	
	pre {
	  background-color: #333;
	  padding: 15px;
	  border-radius: 5px;
	  font-family: monospace;
	  color: #f1f1f1;
	  overflow-x: auto;
	}
	
	code {
	  color: #ff416c;
	}
	
	ul {
	  padding-left: 20px;
	}
	
	li {
	  font-size: 1rem;
	  color: #ccc;
	  margin-bottom: 10px;
	}
	.nav-list {
  display: flex;
  justify-content: center; /* Center the nav items */
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-list li {
  position: relative;
  flex: 1;
  text-align: center;
  margin: 0 10px; /* Add margin between items for better spacing */
}

button {
  background-color: transparent;
  color: #fff;
  padding: 12px 30px;
  border: 2px solid #444;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  width: auto; /* Remove the full width */
  display: inline-block; /* Allow the button to adjust its width */
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid #fff;
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.active button {
  border-color: #00c9b7;
  color: #00c9b7;
  background-color: rgba(0, 201, 183, 0.1);
}

.active button:hover {
  background-color: #00c9b7;
  color: #121212;
  border-color: #00c9b7;
  transform: scale(1.1);
}
/* Footer styling */
footer {
  margin-top: 40px;
  text-align: center;
  color: #888;
  font-size: 1.2rem;
  font-weight: bold;
}

.footer-text {
  font-family: 'Arial', sans-serif;
  font-size: 1.2rem;
  color: #ccc;
  display: inline-block;
  position: relative;
  letter-spacing: 1px;
  animation: fadeIn 1s ease-in-out infinite alternate;
}

.highlight {
  color: #00c9b7;
  font-style: italic;
  animation: textHighlight 2s infinite alternate;
}

/* Animation for the footer text */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation for highlighting the name */
@keyframes textHighlight {
  0% {
    color: #00c9b7;
  }
  100% {
    color: #ff416c;
  }
}


  </style>
  