// Error: The loop condition is wrong.
// The loop runs only when the first guess is correct, so wrong guesses are not handled.

using System;

class Program
{
    static void Main()
    {
        int secretNumber = 25;
        int guess = Convert.ToInt32(Console.ReadLine());

        while (guess == secretNumber)
        {
            Console.WriteLine("Correct!");
            guess = Convert.ToInt32(Console.ReadLine());
        }
    }
}