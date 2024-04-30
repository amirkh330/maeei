import { useState } from "react";
import { Tag, TagCloseButton, TagLabel, Input, Flex } from "@chakra-ui/react";
import { useController, Control } from "react-hook-form";

interface TagGeneratorProps {
  control: Control;
  name: string;
}

export default function TagGenerator({ control, name }: TagGeneratorProps) {
  const { field, fieldState } = useController({ control, name });
  const { value, onChange } = field;
  const { error } = fieldState;

  const [tags, setTags] = useState<string[]>([]);

  const handleTagClose = (tag: string) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
    onChange(updatedTags); // Update the form field value
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && event.currentTarget.value.trim() !== "") {
      const newTag = event.currentTarget.value.trim();
      const updatedTags = [...tags, newTag];
      setTags(updatedTags);
      onChange(updatedTags); // Update the form field value
      event.currentTarget.value = ""; // Clear the input field
    }
  };

  return (
    <Flex flexWrap="wrap">
      {tags.map((tag, index) => (
        <Tag
          key={index}
          borderRadius="full"
          variant="solid"
          colorScheme="blue"
          mr={2}
          mb={2}
        >
          <TagLabel fontSize={12}>{tag}</TagLabel>
          <TagCloseButton onClick={() => handleTagClose(tag)} />
        </Tag>
      ))}
      <Input
        {...field}
        onKeyDown={handleInputKeyDown}
        isInvalid={!!error}
        _placeholder={{ color: "gray.600" }}
        textColor={"black"}
        borderColor={"gray.500"}
        placeholder="وارد کنید"
      />
    </Flex>
  );
}