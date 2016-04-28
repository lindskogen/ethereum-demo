contract Auction {

    address seller;
    address public leader;
    address public winner;
    string public item;
    uint public leadingBid;

    modifier onlySeller() {
        if (msg.sender != seller) throw;
        _
    }

    function Auction(string name, uint initialPrice) {
        seller = msg.sender;
        item = name;
        leadingBid = initialPrice;
    }

    function placeBid() {
        if (msg.value > leadingBid) {
            returnPrevBid();
            leader = msg.sender;
            leadingBid = msg.value;
        } else {
            // Return bid
            address(msg.sender).send(msg.value);
        }
    }

    function returnPrevBid() {
        if (leader != 0) {
            leader.send(leadingBid);
        }
    }

    function endAuction() onlySeller {
        winner = leader;
        seller.send(leadingBid);
    }

    function isSeller() onlySeller returns (bool isSeller) {
        return true;
    }
}
