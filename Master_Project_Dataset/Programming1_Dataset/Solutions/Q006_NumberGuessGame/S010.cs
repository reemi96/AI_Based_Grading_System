using System;

class Program
{
    static void Main()
    {
        int secretNumber = 25;
        int guess;

        do
        {
            guess = Convert.ToInt32(Console.ReadLine());

            if (guess < secretNumber)
                Console.WriteLine("Too Low");
            else if (guess > secretNumber)
                Console.WriteLine("Too High");

        } while (guess != secretNumber);

        Console.WriteLine("Correct!");
    }
}