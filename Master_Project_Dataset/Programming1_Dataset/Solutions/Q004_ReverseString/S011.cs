// Error: Only reverses half of the string.
// The output is incomplete.

using System;

class Program
{
    static void Main()
    {
        string text = Console.ReadLine();

        for (int i = text.Length - 1; i >= text.Length / 2; i--)
        {
            Console.Write(text[i]);
        }
    }
}