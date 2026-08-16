// Correct solution.
// Checks divisors up to square root of n.

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

        bool prime = true;

        for (int i = 2; i * i <= n; i++)
        {
            if (n % i == 0)
            {
                prime = false;
                break;
            }
        }

        Console.WriteLine(prime ? "Prime Number" : "Not Prime Number");
    }
}
