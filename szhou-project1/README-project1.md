/**
 * @file @szhou-project1-stack.ts
 * 
 * This file contains the implementation of the stack data structure for the project.
 * 
 * The stack is a collection of elements with two principal operations:
 * - Push: Adds an element to the collection.
 * - Pop: Removes the most recently added element that was not yet removed.
 * 
 * The stack follows the Last In, First Out (LIFO) principle.
 * 
 * This implementation includes the following functionalities:
 * - Initializing a new stack.
 * - Checking if the stack is empty.
 * - Pushing an element onto the stack.
 * - Popping an element from the stack.
 * - Peeking at the top element of the stack without removing it.
 * - Getting the size of the stack.
 * 
 * Usage:
 * 
 * ```typescript
 * const stack = new Stack<number>();
 * stack.push(1);
 * stack.push(2);
 * console.log(stack.pop()); // Outputs: 2
 * console.log(stack.peek()); // Outputs: 1
 * console.log(stack.size()); // Outputs: 1
 * ```
 * 
 * @module Stack
 * @author 
 * @version 1.0
 * @since 2023
 */