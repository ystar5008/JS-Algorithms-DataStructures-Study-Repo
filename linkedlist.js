class LinkedList {
    //연결리스트의 길이를 나타내는 속성
    length = 0;
    //연결리시트의 시작 노드를 가리키는 속성, 초기값은 null
    head = null;
    //연결리스트에 새로운 값을 가진 노드를 추가하는 메서드
    add(value) {
        //만약head가 존재한다면, 
        //연결리스트의 끝까지 이동하여 마지막 노드 뒤에 새로운 노드를 추가
        if (this.head) {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(value);
            //그렇지 않으면, 연결 리스트가 비어 있으므로 head에 새로운 노드를 추가합니다.
        } else {
            this.head = new Node(value);
        }
        this.length++;
        return this.length;
    }
    //주어진 인덱스에 해당하는 노드의 값을 반환하는 메서드, 내부적으로 #search(index)메서드를 호출하여 해당 노드를 찾고 그 노드의 값을 반환
    search(index) {
        return this.#search(index)[1]?.value;
    }
    //주어진 인덱스에 해당하는 노드를 찾는 내부 메서드, 연결리스트를 순회하면서 해당 인덱스에 해당하는 노드를 찾아 `[이전 노드, 현재 노드]` 형태로 반환
    //인덱스가 없는 경우 undefined를 반환
    #search(index) {
        let count = 0;
        let prev;
        let current = this.head;
        while (count < index) {
            prev = current;
            current = current?.next;
            count++;
        }
        return [prev, current];
    }
    //주어진 인덱스에 해당하는 노드를 제거하는 메서드
    remove(index) {
        //#search(index)를 사용하여 제거 대상 노드와 그 이전노드를 찾은 후, 이전 노드의 next를 대상 노드의 다음 노드로 설정하여 노드를 삭제
        const [prev, current] = this.#search(index);
        if (prev && current) {
            //만약 인덱스가 0인 경우 head를 다음 노드로 업데이트하여 첫번째 노드를 삭제합니다.
            prev.next = current.next;
            //삭제 성공시 연결리스트의 길이를 줄이고
            this.length--;
            return this.length;
        } else if (current) {
            // 삭제되지 않은 경우 아무 작업도 하지 않음
            // index가 0일 때
            this.head = current.next;
            this.length--;
            return this.length;
        }
        // 삭제하고자 하는 대상이 없을 때
        // 아무것도 안 함
    }
}

class Node {
    //next : 다음 노드를 가리키는 속성
    next = null;
    //노드를 초기화하는 생성자 함수, 주어진 값을 노드의 값으로 설정
    constructor(value) {
        this.value = value;
    }
}

const ll = new LinkedList();
const node = new Node();
ll.length;
ll.add(1); // 1
ll.add(2); // 2
ll.add(3); // 3
ll.add(4); // 4
ll.add(5); // 5
ll.add(6); // 6
ll.search(6); // undefined
ll.remove(4);
ll.search(4); // 6;
ll.remove(4);
ll.search(4); // undefined
ll.remove(4); // undefined

console.log(node.value)
console.log(ll.length)
console.log(ll.head)

