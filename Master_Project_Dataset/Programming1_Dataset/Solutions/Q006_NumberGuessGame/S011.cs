// Error: Does not read a new guess inside the loop.
// If the first guess is wrong, the loop may run forever.

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
        }

        Console.WriteLine("Correct!");
    }
}