// Error: Uses "Too Low" for both cases.
// The program never prints "Too High" when the guess is greater than the secret number.

using System;

class Program
{
    static void Main()
    {
        int secretNumber = 25;
        int guess = Convert.ToInt32(Console.ReadLine());

        while (guess != secretNumber)
        {
            if (guess < secretNumber)
                Console.WriteLine("Too Low");
            else
                Console.WriteLine("Too Low");

            guess = Convert.ToInt32(Console.ReadLine());
        }

        Console.WriteLine("Correct!");
    }
}