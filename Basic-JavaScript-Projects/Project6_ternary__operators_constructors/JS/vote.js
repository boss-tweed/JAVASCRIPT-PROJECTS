// Ternary operation determining if user is old enough to vote
function voter_Age() {
    var voter, can_Vote;
    voter = document.getElementById("voter").value;
    can_Vote = (voter < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("vote").innerHTML = can_Vote + " to vote.";
}