// Error: The subtraction operation is implemented incorrectly.
// It adds the numbers instead of subtracting them.

using System;

class Program
{
    static double Calculate(double a, double b, char op)
    {
        switch (op)
        {
            case '+': return a + b;
            case '-': return a + b;
            case '*': return a * b;
            case '/': return a / b;
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