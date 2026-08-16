// Error: Uses int instead of double.
// Division results are incorrect because integer division is performed.

using System;

class Program
{
    static int Calculate(int a, int b, char op)
    {
        switch (op)
        {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return 0;
        }
    }

    static void Main()
    {
        int a = Convert.ToInt32(Console.ReadLine());
        int b = Convert.ToInt32(Console.ReadLine());
        char op = Convert.ToChar(Console.ReadLine());

        Console.WriteLine("Result: " + Calculate(a, b, op));
    }
}