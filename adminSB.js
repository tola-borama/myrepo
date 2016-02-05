
/** admin records **/
db.getCollection("admin").insert({
  "_id": ObjectId("56ab2cac5a4021541d00002a"),
  "username": "admin",
  "password": "21232f297a57a5a743894a0e4a801fc3",
  "role": "1"
});

/** functions records **/
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b1b"),
  "controller": "product",
  "action": "get_new_this_week",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b1f"),
  "controller": "product",
  "action": "get_product_home_page",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b26"),
  "controller": "profile",
  "action": "get_profile_info",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b2b"),
  "controller": "profile",
  "action": "update_profile",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b30"),
  "controller": "profile",
  "action": "get_my_subscribes",
  "method": "get",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b3a"),
  "controller": "promotion",
  "action": "update_promotion_image",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "promotionId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "image",
      "type": "file",
      "status": "1"
    },
    {
      "name": "oldImage",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b22"),
  "controller": "product",
  "action": "search_product_by_name",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "name",
      "type": "text",
      "status": "1"
    },
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b27"),
  "controller": "profile",
  "action": "add_email",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "email",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b2c"),
  "controller": "profile",
  "action": "update_avatar",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "avatarFile",
      "type": "file",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b31"),
  "controller": "profile",
  "action": "get_my_subscriber",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b36"),
  "controller": "promotion",
  "action": "delete_promotion",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "promotionId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b3b"),
  "controller": "promotion",
  "action": "get_promotion_by_id",
  "method": "get",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "promotionId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b23"),
  "controller": "product",
  "action": "search_product",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "name",
      "type": "text",
      "status": "1"
    },
    {
      "name": "tagId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b28"),
  "controller": "profile",
  "action": "add_mobile_number",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "mobileNumber",
      "type": "text",
      "status": "1"
    },
    {
      "name": "countryCode",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b2d"),
  "controller": "profile",
  "action": "add_business_tag",
  "method": "post",
  "description": "no description\r\nadsfas\r\nasdfas\r\nasdf",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessTag",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b32"),
  "controller": "promotion",
  "action": "get_my_promotions",
  "method": "get",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b37"),
  "controller": "promotion",
  "action": "delete_image_promotion",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "promotionId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "imageUrl",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b3c"),
  "controller": "promotion",
  "action": "count_viewed",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "promotionId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73ad7"),
  "controller": "product",
  "action": "get_product_condition",
  "method": "get",
  "description": "no description",
  "params": [
    {
      "name": "",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73ad8"),
  "controller": "category",
  "action": "get_all_categories",
  "method": "get",
  "description": "no description",
  "params": [
    {
      "name": "",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73ad9"),
  "controller": "business",
  "action": "get_premium_business",
  "method": "get",
  "description": "no description",
  "params": [
    {
      "name": "limit",
      "type": "text",
      "status": "0"
    },
    {
      "name": "offset",
      "type": "text",
      "status": "0"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73aea"),
  "controller": "business",
  "action": "count_viewed",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73af4"),
  "controller": "business",
  "action": "upload_voice_description",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "voice",
      "type": "file",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73af9"),
  "controller": "business",
  "action": "add_branch",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "location",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73afe"),
  "controller": "search",
  "action": "search",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "distance",
      "type": "text",
      "status": "1"
    },
    {
      "name": "latitude",
      "type": "text",
      "status": "1"
    },
    {
      "name": "longitude",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b03"),
  "controller": "individualProduct",
  "action": "add_image_gallery",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "image",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b08"),
  "controller": "individualProduct",
  "action": "count_viewed",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b0d"),
  "controller": "notification",
  "action": "release_device",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "deviceType",
      "type": "text",
      "status": "1"
    },
    {
      "name": "deviceId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b12"),
  "controller": "product",
  "action": "like_product",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "isLike",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b17"),
  "controller": "product",
  "action": "remove_promotion_product",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "listPromotionId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b1c"),
  "controller": "product",
  "action": "get_new_this_month",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73ae6"),
  "controller": "business",
  "action": "update_logo",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "image",
      "type": "file",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73aeb"),
  "controller": "business",
  "action": "get_business_by_owner_id",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73af0"),
  "controller": "business",
  "action": "add_cover_image",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "image",
      "type": "file",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73af5"),
  "controller": "business",
  "action": "get_category_by_business",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73afa"),
  "controller": "business",
  "action": "remove_branch",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "branchId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73aff"),
  "controller": "category",
  "action": "get_product_category",
  "method": "get",
  "description": "no description",
  "params": [
    {
      "name": "",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b04"),
  "controller": "individualProduct",
  "action": "like_product",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "likerId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "isLike",
      "type": "text",
      "status": "1"
    },
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b09"),
  "controller": "individualProduct",
  "action": "get_my_product",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b0e"),
  "controller": "notification",
  "action": "push_notification",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "type",
      "type": "text",
      "status": "1"
    },
    {
      "name": "description",
      "type": "text",
      "status": "1"
    },
    {
      "name": "destinationId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b13"),
  "controller": "product",
  "action": "update_product",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b18"),
  "controller": "product",
  "action": "remove_video_gallery",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "videoUrl",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b1d"),
  "controller": "product",
  "action": "get_product_near_by",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73ae7"),
  "controller": "business",
  "action": "remove_video_gallery",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "url",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73aec"),
  "controller": "business",
  "action": "get_business_by_id",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73af1"),
  "controller": "business",
  "action": "delete_business",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73af6"),
  "controller": "business",
  "action": "remove_voice_description",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "url",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73afb"),
  "controller": "businessTag",
  "action": "get_all_business_tags",
  "method": "get",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b00"),
  "controller": "category",
  "action": "get_business_category",
  "method": "get",
  "description": "no description",
  "params": [
    {
      "name": "",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b05"),
  "controller": "individualProduct",
  "action": "update_product",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b0a"),
  "controller": "individualProduct",
  "action": "remove_product",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b0f"),
  "controller": "product",
  "action": "add_image_gallery",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "image",
      "type": "file",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b14"),
  "controller": "product",
  "action": null,
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b19"),
  "controller": "product",
  "action": "count_viewed",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b1e"),
  "controller": "product",
  "action": "remove_product",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73ae8"),
  "controller": "business",
  "action": "remove_category",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "categoryId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73aed"),
  "controller": "business",
  "action": "get_all_business",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73af2"),
  "controller": "business",
  "action": "remove_business_type",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessTypeId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73af7"),
  "controller": "business",
  "action": "search_product_by_business_id",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "keyword",
      "type": "text",
      "status": "1"
    },
    {
      "name": "limit",
      "type": "text",
      "status": "0"
    },
    {
      "name": "offset",
      "type": "text",
      "status": "0"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73afc"),
  "controller": "businessTag",
  "action": "get_tag_by_product_category_id",
  "method": "get",
  "description": "no description",
  "params": [
    {
      "name": "categoryId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b01"),
  "controller": "category",
  "action": "sync_product_category",
  "method": "get",
  "description": "no description",
  "params": [
    {
      "name": "modifiedDate",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b06"),
  "controller": "individualProduct",
  "action": "get_product",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "ownerId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b0b"),
  "controller": "notification",
  "action": "get_notification",
  "method": "get",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b10"),
  "controller": "product",
  "action": "add_video_gallery",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "url",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b15"),
  "controller": "product",
  "action": "get_all_product",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b1a"),
  "controller": "product",
  "action": "get_most_popular",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73ae9"),
  "controller": "business",
  "action": "update_category",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "categoryId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "newCategoryName",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73aee"),
  "controller": "business",
  "action": "add_business_tag",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "listBusinessTag",
      "type": "text",
      "status": "1"
    },
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73af3"),
  "controller": "business",
  "action": "remove_cover_image",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "url",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73af8"),
  "controller": "business",
  "action": "get_product_by_business_category",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73afd"),
  "controller": "businessTag",
  "action": "get_business_tag_by_id",
  "method": "get",
  "description": "no description",
  "params": [
    {
      "name": "tagId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b02"),
  "controller": "category",
  "action": "sync_business_category",
  "method": "get",
  "description": "no description",
  "params": [
    {
      "name": "modifiedDate",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b07"),
  "controller": "individualProduct",
  "action": "remove_image_gallery",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "imageUrl",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b0c"),
  "controller": "notification",
  "action": "save_device_info",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "deviceType",
      "type": "text",
      "status": "1"
    },
    {
      "name": "deviceId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "deviceToken",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b11"),
  "controller": "product",
  "action": "add_promotion_product",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "listPromotionId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b16"),
  "controller": "product",
  "action": "remove_image_gallery",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "imageUrl",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b24"),
  "controller": "product",
  "action": "get_business_category_name",
  "method": "get",
  "description": "no description",
  "params": [
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "categoryId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b29"),
  "controller": "profile",
  "action": "remove_email",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "email",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b2e"),
  "controller": "profile",
  "action": "remove_business_tag",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessTag",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b33"),
  "controller": "promotion",
  "action": "get_all_promotions_by_business",
  "method": "get",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b38"),
  "controller": "promotion",
  "action": "like_promotion",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "promotionId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "isLike",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b3d"),
  "controller": "report",
  "action": "report_item",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "itemId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "description",
      "type": "text",
      "status": "1"
    },
    {
      "name": "type",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b20"),
  "controller": "product",
  "action": "add_business_tag",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessTag",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b25"),
  "controller": "profile",
  "action": "update_geo_location",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "latitude",
      "type": "text",
      "status": "1"
    },
    {
      "name": "longitude",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b2a"),
  "controller": "profile",
  "action": "remove_mobile_number",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "mobileNumber",
      "type": "text",
      "status": "1"
    },
    {
      "name": "countryCode",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b2f"),
  "controller": "profile",
  "action": "update_member_level",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "memberLevel",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b34"),
  "controller": "promotion",
  "action": "add_promotion",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "name",
      "type": "text",
      "status": "1"
    },
    {
      "name": "description",
      "type": "text",
      "status": "1"
    },
    {
      "name": "image",
      "type": "file",
      "status": "1"
    },
    {
      "name": "dateStart",
      "type": "text",
      "status": "1"
    },
    {
      "name": "dateEnd",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b39"),
  "controller": "promotion",
  "action": "add_promotion_image",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "promotionId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "image",
      "type": "file",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b21"),
  "controller": "product",
  "action": "remove_business_tag",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessTag",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73b35"),
  "controller": "promotion",
  "action": "update_promotion",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "promotionId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73adc"),
  "controller": "product",
  "action": "add_product",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "name",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "categoryId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "price",
      "type": "text",
      "status": "1"
    },
    {
      "name": "currency",
      "type": "text",
      "status": "1"
    },
    {
      "name": "dateStart",
      "type": "text",
      "status": "1"
    },
    {
      "name": "dateEnd ",
      "type": "text",
      "status": "1"
    },
    {
      "name": "condition",
      "type": "text",
      "status": "1"
    },
    {
      "name": "description",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73ae1"),
  "controller": "business",
  "action": "upload_logo",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "image",
      "type": "file",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73add"),
  "controller": "individualProduct",
  "action": "add_product",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "name",
      "type": "text",
      "status": "1"
    },
    {
      "name": "productCategoryId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "price",
      "type": "text",
      "status": "1"
    },
    {
      "name": "currency",
      "type": "text",
      "status": "1"
    },
    {
      "name": "dateStart",
      "type": "text",
      "status": "1"
    },
    {
      "name": "dateEnd ",
      "type": "text",
      "status": "1"
    },
    {
      "name": "condition",
      "type": "text",
      "status": "1"
    },
    {
      "name": "description",
      "type": "text",
      "status": "1"
    },
    {
      "name": "contactSeller",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73ae2"),
  "controller": "business",
  "action": "update_geo_location",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73ada"),
  "controller": "profile",
  "action": "login",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "socialId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "socialType",
      "type": "text",
      "status": "1"
    },
    {
      "name": "firstName",
      "type": "text",
      "status": "1"
    },
    {
      "name": "lastName",
      "type": "text",
      "status": "1"
    },
    {
      "name": "avatar",
      "type": "text",
      "status": "1"
    },
    {
      "name": "displayName",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73adf"),
  "controller": "business",
  "action": "subscribe",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "value",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73ae4"),
  "controller": "business",
  "action": "add_video_gallery",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "url",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73adb"),
  "controller": "business",
  "action": "register_business",
  "method": "post",
  "description": "bussinessType=[{id:'...',name:'....'}]</br>\r\nlocation[{name:., email:.., phoneNumber:.., address:.., lat:..., lon:...}]",
  "params": [
    {
      "name": "name",
      "type": "text",
      "status": "1"
    },
    {
      "name": "description",
      "type": "text",
      "status": "1"
    },
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "bussinessType",
      "type": "text",
      "status": "1"
    },
    {
      "name": "location",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73ae0"),
  "controller": "business",
  "action": "add_image_gallery",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "image",
      "type": "file",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73ade"),
  "controller": "business",
  "action": "add_category",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "categoryName",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73ae3"),
  "controller": "business",
  "action": "update_business",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73ae5"),
  "controller": "business",
  "action": "remove_image_gallery",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "url",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56a9c9a48881f03c0fd73aef"),
  "controller": "business",
  "action": "add_business_type",
  "method": "post",
  "description": "no description",
  "params": [
    {
      "name": "businessId",
      "type": "text",
      "status": "1"
    },
    {
      "name": "listBusinessType",
      "type": "text",
      "status": "1"
    },
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    }
  ]
});
db.getCollection("functions").insert({
  "_id": ObjectId("56b07bcc5a40213c0d000029"),
  "controller": "product",
  "action": "get_related_product",
  "method": "get",
  "description": "",
  "params": [
    {
      "name": "accessKey",
      "type": "text",
      "status": "1"
    },
    {
      "name": "categoryId",
      "type": "text",
      "status": "1"
    }
  ]
});

/** server_menu records **/
db.getCollection("server_menu").insert({
  "_id": ObjectId("56b2ee9c5a40211012000029"),
  "name": "Ze Social Business",
  "url": "http://192.168.1.67/SocialBusinessWS/",
  "index": 1,
  "status": 1
});
db.getCollection("server_menu").insert({
  "_id": ObjectId("56b2eec55a4021101200002a"),
  "name": "SB Server Local",
  "url": "http://192.168.1.142/SocialBusinessWS/",
  "index": 2,
  "status": 0
});
db.getCollection("server_menu").insert({
  "_id": ObjectId("56b2eee35a4021101200002b"),
  "name": "SB Server Pro",
  "url": "http://webservice.zesocialbusiness.biz/SocialBusinessWS/",
  "index": 3,
  "status": 0
});
