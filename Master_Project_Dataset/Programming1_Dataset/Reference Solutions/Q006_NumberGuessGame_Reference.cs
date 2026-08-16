using System;

class Program
{
    static void Main()
    {
        int secretNumber = 25;
        int guess;

        Console.Write("Enter your guess: ");
        guess = Convert.ToInt32(Console.ReadLine());

        while (guess != secretNumber)
        {
            if (guess < secretNumber)
            {
                Console.WriteLine("Too Low");
            }
            else
            {
                Console.WriteLine("Too High");
            }

            Console.Write("Enter your guess: ");
            guess = Convert.ToInt32(Console.ReadLine());
        }

        Console.WriteLine("Correct!");
    }
}