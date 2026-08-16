// Correct solution.
// Uses while loop.

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        if (n < 2)
        {
            Console.WriteLine("Not Prime Number");
            return;
        }

        int i = 2;
        bool prime = true;

        while (i < n)
        {
            if (n % i == 0)
            {
                prime = false;
                break;
            }

            i++;
        }

        Console.WriteLine(prime ? "Prime Number" : "Not Prime Number");
    }
}
