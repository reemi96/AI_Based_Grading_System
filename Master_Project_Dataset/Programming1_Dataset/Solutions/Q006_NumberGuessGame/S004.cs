// Error: The loop stops after the first incorrect guess.
// The program should continue asking until the correct number is guessed.

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
                Console.WriteLine("Too High");

            break;
        }

        Console.WriteLine("Correct!");
    }
}