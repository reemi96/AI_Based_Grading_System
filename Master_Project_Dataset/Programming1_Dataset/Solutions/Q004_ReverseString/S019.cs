// Error: Does not handle empty strings.
// Crashes when input is empty.

using System;

class Program
{
    static void Main()
    {
        string text = Console.ReadLine();

        Console.WriteLine(text[text.Length - 1]);
    }
}