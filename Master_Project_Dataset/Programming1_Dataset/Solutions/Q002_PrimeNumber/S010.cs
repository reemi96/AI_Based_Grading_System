// Error: Rejects number 2 as a prime number.
// The condition n <= 2 is incorrect because 2 is prime.

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        if (n <= 2)
        {
            Console.WriteLine("Not Prime Number");
            return;
        }

        bool prime = true;

        for (int i = 2; i < n; i++)
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
