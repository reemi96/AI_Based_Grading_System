// Error: The program ignores the second number.
// The Calculate method performs operations using only the first number.

using System;

class Program
{
    static double Calculate(double a, double b, char op)
    {
        switch (op)
        {
            case '+': return a;
            case '-': return a;
            case '*': return a;
            case '/': return a;
            default: return double.NaN;
        }
    }

    static void Main()
    {
        double a = Convert.ToDouble(Console.ReadLine());
        double b = Convert.ToDouble(Console.ReadLine());
        char op = Convert.ToChar(Console.ReadLine());

        double result = Calculate(a, b, op);

        if (double.IsNaN(result))
            Console.WriteLine("Invalid Operator");
        else
            Console.WriteLine("Result: " + result);
    }
}