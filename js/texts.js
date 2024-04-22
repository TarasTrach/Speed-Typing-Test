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
         "const generateRandomColor = () => {",
         "    const letters = '0123456789ABCDEF';",
         "    let color = '#';",
         "    for (let i = 0; i < 6; i++) {",
         "        color += letters[Math.floor(Math.random() * 16)];",
         "    }",
         "    return color;",
         "};"
      ]
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
      type: "JS",
      text: [
         "const calculateAverage = (numbers) => {",
         "    const total = numbers.reduce((acc, curr) => acc + curr, 0);",
         "    return total / numbers.length;",
         "};"
      ]
   },
   {
      type: "JS",
      text: [
         "const calculateFactorial = (n) => {",
         "    if (n === 0 || n === 1) return 1;",
         "    let result = 1;",
         "    for (let i = 2; i <= n; i++) {",
         "        result *= i;",
         "    }",
         "    return result;",
         "};"
      ]
   },
   {
      type: "JS",
      text: [
         "function shuffleArray(array) {",
         "    for (let i = array.length - 1; i > 0; i--) {",
         "        const j = Math.floor(Math.random() * (i + 1));",
         "        [array[i], array[j]] = [array[j], array[i]];",
         "    }",
         "    return array;",
         "}"
      ]
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
      type: "c++",
      text: [
         "void mergeSort(int arr[], int left, int right) {",
         "    if (left < right) {",
         "        int mid = left + (right - left) / 2;",
         "        mergeSort(arr, left, mid);",
         "        mergeSort(arr, mid + 1, right);",
         "        merge(arr, left, mid, right);",
         "    }",
         "}"
      ]
   },
   {
      type: "c++",
      text: [
         "int fibonacci(int n) {",
         "    if (n <= 1) return n;",
         "    int a = 0, b = 1;",
         "    for (int i = 2; i <= n; ++i) {",
         "        int temp = a + b;",
         "        a = b;",
         "        b = temp;",
         "    }",
         "    return b;",
         "}"
      ]
   },
   {
      type: "c++",
      text: [
         "void insertionSort(int arr[], int n) {",
         "    for (int i = 1; i < n; ++i) {",
         "        int key = arr[i];",
         "        int j = i - 1;",
         "        while (j >= 0 && arr[j] > key) {",
         "            arr[j + 1] = arr[j];",
         "            --j;",
         "        }",
         "        arr[j + 1] = key;",
         "    }",
         "}"
      ]
   },
   {
      type: "c++",
      text: [
         "double calculateAverage(const std::vector<int>& numbers) {",
         "    if (numbers.empty()) return 0.0;",
         "    int sum = std::accumulate(numbers.begin(), numbers.end(), 0);",
         "    return static_cast<double>(sum) / numbers.size();",
         "}"
      ]
   },
   {
      type: "c++",
      text: [
         "void selectionSort(int arr[], int n) {",
         "    for (int i = 0; i < n - 1; ++i) {",
         "        int minIndex = i;",
         "        for (int j = i + 1; j < n; ++j) {",
         "            if (arr[j] < arr[minIndex]) {",
         "                minIndex = j;",
         "            }",
         "        }",
         "        std::swap(arr[i], arr[minIndex]);",
         "    }",
         "}"
      ]
   },
   {
      type: "c++",
      text: [
         "int gcd(int a, int b) {",
         "    while (b != 0) {",
         "        int temp = b;",
         "        b = a % b;",
         "        a = temp;",
         "    }",
         "    return a;",
         "}"
      ]
   },
   {
      type: "c++",
      text: [
         "bool isPrime(int n) {",
         "    if (n <= 1) return false;",
         "    if (n <= 3) return true;",
         "    if (n % 2 == 0 || n % 3 == 0) return false;",
         "    for (int i = 5; i * i <= n; i += 6) {",
         "        if (n % i == 0 || n % (i + 2) == 0) return false;",
         "    }",
         "    return true;",
         "}"
      ]
   },
   {
      type: "c++",
      text: [
         "void printBinary(int n) {",
         "    std::bitset<sizeof(n) * CHAR_BIT> binary(n);",
         "    std::cout << binary << std::endl;",
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
   {
      type: "python",
      text: [
         "def binary_search(arr, target):",
         "    left = 0",
         "    right = len(arr) - 1",
         "    while left <= right:",
         "        mid = (left + right) // 2",
         "        if arr[mid] == target:",
         "            return mid",
         "        elif arr[mid] < target:",
         "            left = mid + 1",
         "        else:",
         "            right = mid - 1",
         "    return -1"
      ]
   },
   {
      type: "python",
      text: [
         "def selection_sort(arr):",
         "    for i in range(len(arr)):",
         "        min_idx = i",
         "        for j in range(i+1, len(arr)):",
         "            if arr[j] < arr[min_idx]:",
         "                min_idx = j",
         "        arr[i], arr[min_idx] = arr[min_idx], arr[i]"
      ]
   },
   {
      type: "python",
      text: [
         "def binary_search_recursive(arr, target, left, right):",
         "    if left > right:",
         "        return -1",
         "    mid = (left + right) // 2",
         "    if arr[mid] == target:",
         "        return mid",
         "    elif arr[mid] < target:",
         "        return binary_search_recursive(arr, target, mid + 1, right)",
         "    else:",
         "        return binary_search_recursive(arr, target, left, mid - 1)"
      ]
   },
];