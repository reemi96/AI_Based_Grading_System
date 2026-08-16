// Error: Uses a for loop with only 3 attempts.
// The program should continue until the correct number is guessed, not stop after 3 tries.

using System;

class Program
{
    static void Main()
    {
        int secretNumber = 25;

        for (int i = 0; i < 3; i++)
        {
            int guess = Convert.ToInt32(Console.ReadLine());

            if (guess < secretNumber)
                Console.WriteLine("Too Low");
            else if (guess > secretNumber)
                Console.WriteLine("Too High");
            else
                Console.WriteLine("Correct!");
        }
    }
}