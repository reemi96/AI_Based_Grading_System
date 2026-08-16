using System;

class Program
{
    static void Main()
    {
        string text = Console.ReadLine();

        char[] chars = text.ToCharArray();

        Array.Reverse(chars);

        string reversed = new string(chars);

        Console.WriteLine(reversed);
    }
}