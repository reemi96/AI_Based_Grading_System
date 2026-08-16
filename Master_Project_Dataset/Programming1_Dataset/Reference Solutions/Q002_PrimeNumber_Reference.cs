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

        bool isPrime = true;

        for (int i = 2; i < n; i++)
        {
            if (n % i == 0)
            {
                isPrime = false;
                break;
            }
        }

        if (isPrime)
            Console.WriteLine("Prime Number");
        else
            Console.WriteLine("Not Prime Number");
    }
}