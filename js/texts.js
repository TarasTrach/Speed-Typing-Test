export const textOptions = [
   {
      type: "JS",
      text: [
         "async function fetchData() {",
         "    try {",
         "        const response = await fetch('https://example.com/data');",
         "        const data = await response.json();",
         "        console.log(data);",
         "    } catch (error) {",
         "        console.error('Error fetching data:', error);",
         "    }",
         "}"
      ],
   },
   {
      type: "JS",
      text: [
         "const callbacks = {",
         "    'my_announcement': async (chatId, userId) => {",
         "        const text = await getUserAnnouncements(userId);",
         "        return { text: text, options: AnnouncementOptions };",
         "    },",
         "};"
      ],
   },
   {
      type: "JS",
      text: [
         "app.post('/api/customers', (req, res) => {",
         "    try {",
         "        console.log('New customer! Details: ' + req.body);",
         "        const customer = new Customer(req.body);",
         "        customer.save();",
         "        res.status(201).json({ customer });",
         "    } catch (e) {",
         "        res.status(500).json({ error: e.message });",
         "    }",
         "});"
      ],
   },
   {
      type: "JS",
      text: [
         "const getAnnouncementText = async (option) => {",
         "    try {",
         "        const announcements = await AnnouncementModel.find({",
         "            option, isActive: true",
         "        });",
         "        if (announcements.length > 0) {",
         "            const texts = announcements.map((announcement) =>",
         "                announcement.properties.text );",
         "            return texts.join('\\n\\n');",
         "        } else return -1;",
         "    } catch (error) {",
         "        console.error('Error', error);",
         "        return 'Error';",
         "    }",
         "};"
      ],
   },
   {
      type: "JS",
      text: [
         "const processUserData = async (userData) => {",
         "    try {",
         "        const processedData = await processData(userData);",
         "        return processedData;",
         "    } catch (error) {",
         "        console.error('Error processing user data:', error);",
         "        return null;",
         "    }",
         "};"
      ],
   },
   {
      type: "c++",
      text: [
         "void bubbleSort(int arr[], int n) {",
         "    for (int i = 0; i < n-1; ++i) {",
         "        for (int j = 0; j < n-i-1; ++j) {",
         "            if (arr[j] > arr[j+1]) {",
         "                // Swap arr[j] and arr[j+1]",
         "                int temp = arr[j];",
         "                arr[j] = arr[j+1];",
         "                arr[j+1] = temp;",
         "            }",
         "        }",
         "    }",
         "}"]
   },
   {
      type: "c++",
      text: [
         "unsigned long long factorial(unsigned int n) {",
         "    if (n == 0 || n == 1) {",
         "        return 1;",
         "    } else {",
         "        return n * factorial(n - 1);",
         "    }",
         "}"
      ]
   },
   {
      type: "c++",
      text: [
         "bool isPalindrome(const std::string& str) {",
         "    std::string temp = str;",
         "    std::transform(temp.begin(), temp.end(), temp.begin(), ::tolower);",
         "    std::string reversed = temp;",
         "    std::reverse(reversed.begin(), reversed.end());",
         "    return temp == reversed;",
         "}"
      ]
   },
   {
      type: "c++",
      text: [
         "void quickSort(std::vector<int>& arr, int left, int right) {",
         "    if (left < right) {",
         "        int pivotIndex = partition(arr, left, right);",
         "        quickSort(arr, left, pivotIndex - 1);",
         "        quickSort(arr, pivotIndex + 1, right);",
         "    }",
         "}",
      ]
   },
   {
      type: "c++",
      text: [
         "int partition(std::vector<int>& arr, int left, int right) {",
         "    int pivot = arr[right];",
         "    int i = left - 1;",
         "    for (int j = left; j < right; ++j) {",
         "        if (arr[j] < pivot) {",
         "            ++i;",
         "            std::swap(arr[i], arr[j]);",
         "        }",
         "    }",
         "    std::swap(arr[i + 1], arr[right]);",
         "    return i + 1;",
         "}"
      ]
   },
   {
      type: "python",
      text: [
         "def calculate_sum(nums):",
         "    total = 0",
         "    for num in nums:",
         "        total += num",
         "    return total"
      ]
   },
   {
      type: "python",
      text: [
         "def is_prime(number):",
         "    if number <= 1:",
         "        return False",
         "    for i in range(2, int(number**0.5) + 1):",
         "        if number % i == 0:",
         "            return False",
         "    return True"
      ]
   },
   {
      type: "python",
      text: [
         "def solve():",
         "    board = [[-1 for _ in range(n)] for _ in range(n)]",
         "    moves = [(2, 1), (1, 2), (-1, 2), (-2, 1),",
         "             (-2, -1), (-1, -2), (1, -2), (2, -1)]",
         "    board[row][col] = 0",
         "    if not solve_util(board, row, col, 1, moves):",
         "        print('No solution exists')",
         "    else:",
         "        print_solution(board)",
      ]
   },
   {
      type: "python",
      text: [
         "def print_solution(board):",
         "    for i in range(n):",
         "        for j in range(n):",
         "            print(board[i][j], end=' ')",
         "        print()",
      ]
   },
   {
      type: "python",
      text: [
         "from flask import Flask",
         "app = Flask(__name__)",
         "@app.route('/')",
         "def hello_world():",
         "    return 'Hello, World!'",
         "if __name__ == '__main__':",
         "    app.run()"
      ]
   },
];