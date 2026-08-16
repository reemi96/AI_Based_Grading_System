// Error: Uses "Too High" for both cases.
// The program never prints "Too Low" when the guess is smaller than the secret number.

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
                Console.WriteLine("Too High");
            else
                Console.WriteLine("Too High");

            guess = Convert.ToInt32(Console.ReadLine());
        }

        Console.WriteLine("Correct!");
    }
}