// Error: The comparison messages are reversed.
// It prints "Too Low" when the guess is higher than the secret number,
// and prints "Too High" when the guess is lower.

using System;

class Program
{
    static void Main()
    {
        int secretNumber = 25;

        int guess = Convert.ToInt32(Console.ReadLine());

        while (guess != secretNumber)
        {
            if (guess > secretNumber)
                Console.WriteLine("Too Low");
            else
                Console.WriteLine("Too High");

            guess = Convert.ToInt32(Console.ReadLine());
        }

        Console.WriteLine("Correct!");
    }
}