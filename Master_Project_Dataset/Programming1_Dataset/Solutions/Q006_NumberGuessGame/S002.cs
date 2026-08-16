// Error: Uses the wrong secret number.
// The required secret number is 25, but this solution uses 20.

using System;

class Program
{
    static void Main()
    {
        int secretNumber = 20;

        int guess = Convert.ToInt32(Console.ReadLine());

        while (guess != secretNumber)
        {
            if (guess < secretNumber)
                Console.WriteLine("Too Low");
            else
                Console.WriteLine("Too High");

            guess = Convert.ToInt32(Console.ReadLine());
        }

        Console.WriteLine("Correct!");
    }
}