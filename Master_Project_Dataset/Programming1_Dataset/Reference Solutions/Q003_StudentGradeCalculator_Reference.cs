using System;

class Program
{
    static void Main()
    {
        double grade1 = double.Parse(Console.ReadLine());
        double grade2 = double.Parse(Console.ReadLine());
        double grade3 = double.Parse(Console.ReadLine());

        double average = (grade1 + grade2 + grade3) / 3;

        char letter;

        if (average >= 90)
            letter = 'A';
        else if (average >= 80)
            letter = 'B';
        else if (average >= 70)
            letter = 'C';
        else if (average >= 60)
            letter = 'D';
        else
            letter = 'F';

        Console.WriteLine("Average = " + average);
        Console.WriteLine("Grade = " + letter);
    }
}