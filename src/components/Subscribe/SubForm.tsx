import { useState } from "react";
import axios from "axios";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { ArrowIcon } from "../../global/Icon/Arrow";

function SubForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState(null);

  const subscribe = async (e: any) => {
    e.preventDefault();
    setState("Loading");

    try {
      const response = await axios.post("/api/subscribe", { email });
      setState("Success");
      setEmail("");
      alert("Thank you for subscribing");
    } catch (e: any) {
      setErrorMsg(e?.response?.data?.error);
      setState("Error");
      console.warn(e?.response?.data?.error);
      alert(
        "We're sorry there was a problem with your request.  Please double check your email address.  If there are still issues please reach out to us on discord."
      );
    }
  };

  return (
    <Flex
      as="form"
      onSubmit={subscribe}
      justifyContent={{ base: "flex-start", md: "space-between" }}
      direction={{ base: "column", md: "row" }}
      minW="60%"
    >
      <Input
        bg="black"
        h="70px"
        w={{ base: "90%", md: "100%" }}
        placeholder="Your Email Address"
        _placeholder={{ opacity: 1, color: "grey" }}
        color="white"
        alignSelf="baseline"
        focusBorderColor="none"
        borderRadius={0}
        onChange={(e: any) => setEmail(e.target.value)}
        border="none"
      />
      <Flex
        py=".5em"
        px={{ base: "none", md: ".5em" }}
        h={{ base: "54px", md: "70px" }}
        bg={{ base: "white", md: "black" }}
        align="center"
      >
        <Button
          mt={{ base: ".25em", md: "0px" }}
          bg="#FF003F"
          color="white"
          fontWeight={500}
          type="submit"
          _hover={{ backgroundColor: "rgb(181, 0, 45)" }}
        >
          SUBSCRIBE
          <ArrowIcon />
        </Button>
      </Flex>
    </Flex>
  );
}

export default SubForm;
