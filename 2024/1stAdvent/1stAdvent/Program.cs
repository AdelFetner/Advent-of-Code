var filepath = Path.Combine(Directory.GetParent(AppDomain.CurrentDomain.BaseDirectory).Parent.Parent.Parent.FullName, "input.txt");
var input = File.ReadAllLines(filepath);
Console.WriteLine($"Number of lines: {input.Length}");
Console.WriteLine($"First line: {input[0]}");

var leftList = input.Select(x => x.Split("   ")[0]).Select(int.Parse).Order().ToList();
var rightList = input.Select(x => x.Split("   ")[1]).Select(int.Parse).Order().ToList();

var solution = Enumerable.Range(0, leftList.Count).Select(i => Math.Abs(leftList[i] - rightList[i])).Sum();
Console.WriteLine(solution);

var secondSolution = leftList.Select(l => l * rightList.Count(r => r == l)).Sum();

Console.WriteLine(secondSolution);

