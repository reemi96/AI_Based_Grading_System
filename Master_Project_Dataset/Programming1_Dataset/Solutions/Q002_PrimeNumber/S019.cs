// Error: Wrong output format.
// Logic is correct but output does not match specification.

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        if (n < 2)
        {
            Console.WriteLine("Number is not prime!");
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

        if (prime)
            Console.WriteLine("YES");
        else
            Console.WriteLine("NO");
    }
}
